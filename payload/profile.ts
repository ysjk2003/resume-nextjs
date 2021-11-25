import { faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/Mingyu.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김민규',
    // small: '(LI)',
  },
  contact: [
    {
      title: 'ysjk2003@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/ysjk2003',
      link: 'https://github.com/ysjk2003',
      icon: faGithub,
    },
    {
      title: 'https://parkshistory.tistory.com',
      link: 'https://parkshistory.tistory.com',
      icon: faRss,
    },
  ],
  notice: {
    title: '휴대전화나 페이스북 메시지 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
