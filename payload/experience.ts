import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'SI Analytics',
      position: 'Frontend Developer',
      startedAt: '2019-08',
      descriptions: [
        '위성영상 어노테이팅 툴 클라이언트 개발',
        '위성영상 자동 분석 플랫폼 클라이언트 개발',
        '위성영상 운량 분석 플랫폼 개발',
        '파악 & 관리되고 있지 않았던 프론트 기술부채 파악 및 정리',
      ],
      skillKeywords: ['React.js', 'TypeScript', 'Electron', 'Sass', 'gRpc-web', 'protocol buffer'],
    },
  ],
};

export default experience;
