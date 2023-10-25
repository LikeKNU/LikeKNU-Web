/**
 * 응답에서 실제 데이터 추출
 * @param response
 * @returns {*}
 */
export function extractBodyFromResponse(response) {
    return response.data.data.body;
}

export function extractDataFromResponse(response) {
    return response.data.data;
}

/**
 * 응답에서 Timestamp 추출
 * @param response
 * @returns {*}
 */
export function extractTimestampFromResponse(response) {
    return response.data.timestamp;
}

/**
 * 응답에서 메시지 추출
 * @param response 응답
 * @returns String 메시지
 */
export function extractMessageFromResponse(response) {
    return response.data.message;
}