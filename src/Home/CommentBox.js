import { AttachFileOutlined, EmojiEmotionsOutlined, PhotoLibrary, Send} from '@material-ui/icons';
import React,{useState,useRef} from 'react';
import styled from 'styled-components';

function CommentBox(props) {
  const [isText, setText] = useState(false);
  const textInputs = useRef();

  return (
    <CommentWrap>
        <PhotoLibrary style={{fontSize:'30px'}}/>
        <div>
            <textarea type='text' placeholder='Write a comment' onChange={()=>{setText(true)}} ref={textInputs}/>
            {
                (isText)?(<section><Send onClick={()=>alert('you have made a comment successfully!!')}/></section>):
                (
                    <section><EmojiEmotionsOutlined/><AttachFileOutlined/></section>
                )

            }
        </div>
    </CommentWrap>
  )
}
export const CommentWrap = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    grid-gap: 10px;
    background: rgba(155,155,155,0.6);
    div{
        display: flex;
        align-items: center;
        width: 100%;
        grid-gap: 5px;
        background: #fff;
        border-radius: 20px;
        textarea{
            /* height: 50px; */
            height: 100%;
            width:100%;
            padding: 5px 20px;
            border: none;
            border-radius: 20px;
            outline: none;
            font-size: large;
        }
        section{
            display:flex;
            grid-gap: 5px;
            padding: 0 10px;
        }
    }
`;
export default CommentBox;