import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { ApiResponse, BusStop, BusStopDetails } from './types';
import { fetchAiResponse } from './api';
import CustomText from 'components/reusable/text';
import { saveAiResponse as saveAiResponseToDb } from 'components/db/bus-db';

const BusRoutes = () => {
  const [busStopDetails, setBusStopDetails] = useState<BusStopDetails>({});
  const [aiResponse, setAiResponse] = useState('Nothing');

  const fetchData = async () => {
    const res = await fetch(
      'https://n784k2f6s0.execute-api.ap-southeast-1.amazonaws.com/prod/bus-stop-details',
      {
        method: 'GET',
      }
    );

    const data: ApiResponse = await res.json();
    setBusStopDetails(data.busStopDetails);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sendBusNameToOpenai = async (name: string) => {
    Toast.show({
      type: 'success',
      text1: 'Sending to openai',
    });
    const data = await fetchAiResponse(name);
    setAiResponse(data.reply);
    saveAiResponseToDb(name, data.reply);
    Toast.show({
      type: 'success',
      text1: 'AI response generated',
    });
  };

  return (
    <ScrollView>
      <ListOfBusToBusStops
        busStopDetails={busStopDetails}
        sendBusNameToOpenai={sendBusNameToOpenai}
      />
      <BusStopDetailsComponent text={aiResponse} />
      <Toast />
    </ScrollView>
  );
};

const ListOfBusToBusStops = ({
  busStopDetails,
  sendBusNameToOpenai,
}: {
  busStopDetails: BusStopDetails;
  sendBusNameToOpenai: (name: string) => void;
}) => {
  return (
    <View className="mx-4">
      {Object.keys(busStopDetails).map((bus) => (
        <BusToBusStop
          key={bus}
          busName={bus}
          busStops={busStopDetails[bus]}
          sendBusNameToOpenai={sendBusNameToOpenai}
        />
      ))}
    </View>
  );
};

const BusToBusStop = ({
  busName,
  busStops,
  sendBusNameToOpenai,
}: {
  busName: string;
  busStops: BusStop[];
  sendBusNameToOpenai: (name: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View className="mt-4 border-b border-gray-600">
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Text className="text-lg font-bold">{busName}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View>
          {busStops.map((busStop) => (
            <BusStopInformation
              key={busStop.busStopId}
              name={busStop.name}
              busStopId={busStop.busStopId}
              sendBusNameToOpenai={sendBusNameToOpenai}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const BusStopInformation = ({
  name,
  busStopId,
  sendBusNameToOpenai,
}: {
  name: string;
  busStopId: string;
  sendBusNameToOpenai: (name: string) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => sendBusNameToOpenai(name)}
      className="flex flex-row items-center justify-between">
      <CustomText size="sm">{name}</CustomText>
      <CustomText size="sm">{busStopId}</CustomText>
    </TouchableOpacity>
  );
};

const BusStopDetailsComponent = ({ text }: { text: string }) => {
  return (
    <View className="m-4">
      <Text className="text-lg font-semibold">Ai Response</Text>
      <Text>{text}</Text>
    </View>
  );
};
export default BusRoutes;
