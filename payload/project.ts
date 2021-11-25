import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'LabelEarth',
      startedAt: '2020-01',
      endedAt: '2021-10',
      where: 'SI Analytics',
      descriptions: [
        { content: '위성영상속 특정 물체에 라벨링(주석을 다는 행위)을 하기 위한 프로그램' },
        {
          content: '사각형 라벨/폴리곤 라벨 회전, 리사이징, 이동 등 클라이언트 대부분의 기능 개발',
        },
        { content: 'Devops의 도움을 요청하여 CI/CD 구현' },
      ],
    },
    {
      title: 'Ovison',
      startedAt: '2020-07',
      where: 'SI Analytics',
      descriptions: [
        { content: '위성영상을 AI를 이용해 자동으로 물체를 판독한 결과물을 보여주는 프로그램' },
        {
          content:
            '위성영상 미니맵, 위성영상 밴드 변경, Openlayers를 이용한 객체 클러스터링 기능 등 구현',
        },
        { content: '위성영상 그려주는 로직 최적화' },
        { content: 'LabelEarth와 겹치는 기능 공통모듈로 만들어서 사내 NPM에 올려서 관리' },
        { content: '바쁘다는 이유로 그냥 넘어갔던 이슈들 TODO 주석 붙혀서 관리될 수 있도록 제안' },
      ],
    },
    {
      title: 'CCAS',
      startedAt: '2021-02',
      where: 'SI Analytcis',
      descriptions: [
        { content: '위성영상속 구름을 AI로 판독한 결과물을 보여주거나 수동으로 수정하는 프로그램' },
        { content: 'Superpixel을 이용한 어노테이션 페이지 개발' },
      ],
    },
  ],
};

export default project;
