import Modal from './Modal';
import NavStyle from '../assets/styles/NavStyle';

const {
  NavBar,
  LeftLogo,
  MenuIconAndLogo,
  RightLogoBox,
  IconAndText,
  CompanyIcon,
  CompanyText,
  LogOutText,
} = NavStyle;

export default function Nav() {
  return (
    <NavBar>
      <MenuIconAndLogo>
        <Modal />
        <LeftLogo src="/images/LeftTopLogo.png" alt="좌측 로고" />
      </MenuIconAndLogo>
      <RightLogoBox>
        <IconAndText>
          <CompanyIcon src="/images/whiteCompany.png" alt="로고 이미지" />
          <CompanyText>A 가공업체</CompanyText>
        </IconAndText>
        <LogOutText>로그아웃</LogOutText>
      </RightLogoBox>
    </NavBar>
  );
}
