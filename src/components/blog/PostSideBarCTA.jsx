import styled from 'styled-components';
import Btn from '../Layout/Btn';
import BtnText from '../Layout/BtnText';
import BigBtn from '../Layout/BigBtn';
const PostSideCta = styled.div`
    display: flex;
    flex-direction: column;
    gap:30px;
    margin-top:20px;
    background:var(--light-color);
    padding:30px;
    text-align:center;
`;
const Heading = styled.h3`
    font-size:24px;
`;
export default function PostSideBarCTA() {
  return (
    <PostSideCta className='sticky top-24'>
        <Heading>Would you prefer to talk to a Website Design, Development or SEO Experts?</Heading>
        <BigBtn link="" title="Get a quote"/>
        <BtnText link="/website-design-requestaquote" title="Call: +91-9888940088"/>
    </PostSideCta>
  );
}
