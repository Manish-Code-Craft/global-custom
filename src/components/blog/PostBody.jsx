import styled from 'styled-components';
const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap:30px;
    margin-top:20px;

        @media (min-width:1100px) {
            font-size:20px;
            gap:40px;
            
            h2 {
                margin-top:60px;
            }
        }
        h3 {
            color:var(--blue-color);
        }
        ul {
            display: flex;
            flex-direction: column;
            gap:40px;
        }
        ul li {
            list-style: none;
            padding-left: 30px;
            position: relative;

            &:before {
                content: "✅";
                display: inline-block;
                position: absolute;
                left: 0;
                top: 3px;
            }
        }
    .wp-block-image {
        background: #f5f9ff;
        text-align: center;
        padding: 15px;
        img {
            box-shadow: 0 0 50px #dedede;
            max-width: 100%;
            margin: auto;
        }

        @media (min-width:1100px) {
            padding: 50px;
        }           
    }
`;
export default function PostBody({ content }) {
  return (
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
  );
}
