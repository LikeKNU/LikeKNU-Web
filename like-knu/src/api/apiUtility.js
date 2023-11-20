/**
 * 응답에서 실제 데이터 추출
 * @param data
 * @returns {*}
 */
export function extractBodyFromResponse(data) {
  return data.data.body;
}

export function extractDataFromResponse(data) {
  return data.data;
}

/**
 * 응답에서 Timestamp 추출
 * @param data
 * @returns {*}
 */
export function extractTimestampFromResponse(data) {
  return data.timestamp;
}

/**
 * 응답에서 메시지 추출
 * @param data 응답
 * @returns String 메시지
 */
export function extractMessageFromResponse(data) {
  return data.message;
}
