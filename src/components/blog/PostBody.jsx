import styled from 'styled-components';
const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap:30px;
    margin-top:20px;

        @media (min-width:1100px) {
            font-size:18px;
            gap:20px;
            
            h2 {
            font-size:22px;
                margin-top:20px;
            }
        }
        h3 {
            font-size:20px;
            color:var(--blue-color);
        }
        ul {
            display: flex;
            flex-direction: column;
            gap:10px;
            font-size:18px;
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
        /* Gutenberg table wrapper */
      .wp-block-table {
        margin: 15px 0;
        overflow-x: auto;
      }

      /* Table base */
      .wp-block-table table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #3daee0;
        background-color: #ffffff;
      }

      /* Table cells */
      .wp-block-table td {
        border: 1px solid #dbeafe;
        padding: 14px 16px;
        font-size: 15px;
        color: #1f2937;
        vertical-align: top;
      }

      /* Header row (Gutenberg uses strong inside td) */
      .wp-block-table tbody tr:first-child {
        background-color: #3daee0;
      }

      .wp-block-table tbody tr:first-child td,
      .wp-block-table tbody tr:first-child td strong {
        color: #ffffff;
        font-weight: 600;
      }

      /* Zebra rows */
      .wp-block-table tbody tr:nth-child(even):not(:first-child) {
        background-color: #f5fbfe;
      }

      /* Hover effect */
      .wp-block-table tbody tr:hover:not(:first-child) {
        background-color: #e6f6fc;
        transition: background-color 0.2s ease;
      }

      /* Mobile friendliness */
      .wp-block-table table {
        min-width: 600px;
      }

`;
export default function PostBody({ content }) {
  return (
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
  );
}
