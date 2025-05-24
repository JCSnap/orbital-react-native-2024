export function saveFavourite(busStopId: string) {
  console.log('saving favourite to external db', busStopId);
}

export function saveAiResponse(busStopId: string, aiResponse: string) {
  console.log('saving ai response to external db', busStopId, aiResponse);
}
