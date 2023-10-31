import * as C from "./styles";
import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";


export const SocialMedia = () => {
  return (
    <C.Container>
      <li>
        <C.Link href="https://www.linkedin.com/in/anuranpaul/">
          <LinkedinLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href="https://github.com/anuranpaul">
          <GithubLogo />
        </C.Link>
      </li>
    </C.Container>
  );
};
