import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '2년차 프론트엔드 개발자로 스타트업에서 Electron을 사용하여 데스크탑 어플리케이션을 개발하였습니다. 작은 규모의 팀의 첫번째 프론트엔드 개발자로 입사하여 프로젝트의 맞는 기술 설정부터 배포까지 경험을 해보았습니다. 주로 SI성격의 프로젝트들을 경험하였습니다',
    '회사에서 필요한 부분을 찾아 주도적으로 일하는 것을 좋아합니다. 지금 재직중인 회사에서는 일손이 필요한 프로젝트를 찾아 지원해주거나 그동안 필요하다고 생각했던 CI/CD 파이프라인 구축을 도와줄 수 있는 사람들을 모아 같이 구축했던 경험이 있습니다.',
  ],
  sign: 'Mingyu',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
