import cafeteriaEmoji from '../assets/icon/cafeteria_emoji.png'
import convenienceEmoji from '../assets/icon/convenience_emoji.png'
import dormitoryEmoji from '../assets/icon/dormitory_emoji.png'
import libraryEmoji from '../assets/icon/library_emoji.png'
import studentEmoji from '../assets/icon/student_emoji.png'

export const PLACES_TYPE = {
  BUILDING: { name: '건물', icon: studentEmoji },
  DORMITORY: { name: '기숙사', icon: dormitoryEmoji },
  LIBRARY: { name: '도서관', icon: libraryEmoji },
  CAFETERIA: { name: '식당', icon: cafeteriaEmoji },
  CONVENIENCE: { name: '편의점', icon: convenienceEmoji }
};
