import { ArrowBackSharp } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function StoryStore() {
  const {title} = useParams();
  return (
    <Layout>
      <Holder>
        <ArrowBackSharp/>
        <h2>Story-{title}</h2>
      </Holder>
        <LibraryStore>
          <StoryIndex>
            <header>
              <h2>Index of The Crazy Dude</h2>
            </header>
            <ul>
              <li>The crazy dude season 1 ep 1</li>
              <li>The crazy dude season 1 ep 2</li>
              <li>The crazy dude season 1 ep 3</li>
              <li>The crazy dude season 1 ep 4</li>
              <li>The crazy dude season 1 ep 5</li>
              <li>The crazy dude season 1 ep 6</li>
              <li>The crazy dude season 1 ep 7</li>
            </ul>
          </StoryIndex>
          <StoryContent>
              <h2>The crazy dude S1 Ep2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid. Quaerat laboriosam nesciunt nihil quam aliquid cum delectus aliquam ex! Porro expedita temporibus tempore explicabo laudantium modi, consequuntur, ex molestias ipsa perspiciatis debitis veritatis iure eos non voluptate maxime quae officiis nulla, velit necessitatibus fugit quaerat! Ipsam nemo nesciunt, unde quis, provident accusamus cupiditate recusandae expedita commodi officiis ullam suscipit rerum dolore nam illo molestiae aperiam voluptatum quo est modi itaque repellat praesentium eius! Totam, nemo error. Qui quae in ipsa sequi officia non quis nemo? Quisquam, molestiae saepe cupiditate, minima quis amet doloribus numquam ullam ipsam, suscipit dolorem quidem doloremque et adipisci tempore esse fuga? Blanditiis suscipit necessitatibus exercitationem iusto quo nam sequi animi, recusandae debitis vel quis commodi sapiente laudantium dolorem libero aperiam aliquid a culpa. Mollitia a voluptatem debitis, molestiae iure, nobis beatae ullam delectus praesentium recusandae esse architecto excepturi laudantium iste rerum. Facilis atque dolorum at suscipit, hic aperiam animi vel mollitia provident placeat itaque quia consequuntur ipsam nulla nam. Animi id placeat modi temporibus cumque eaque itaque sapiente non, laborum provident incidunt quae alias, delectus nostrum a dolor, quis expedita earum molestiae possimus veritatis. Nisi non vitae debitis dolor in assumenda ex reiciendis impedit nihil.</p>
          </StoryContent>
        </LibraryStore>
    </Layout>
  )
}
export const Holder=styled.div`
display: flex;
/* justify-content: space-between; */
grid-gap: 700px;
align-items: center;
`;
export const LibraryStore=styled.div`
display: grid;
grid-template-areas: 'index content';
width: 100%;
height: 100%;
grid-gap: 40px;
max-width: 1100px;
max-height: 94vh;
grid-template-rows: minmax(0,90vh) minmax(0,100vh);
grid-template-columns: minmax(400px,2fr) minmax(600px,4fr);
`;
export const StoryIndex=styled.div`
  grid-area: 'index';
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.6);
  height: 100%;
  grid-gap: 20px;
  header{
    padding: 10px 0;
    border-bottom: 1px solid gray;
    background: rgba(0,0,0,0.4);
    h2{
      font-size: x-large;
      text-align: center;
      color: rgba(233, 56, 56, 0.445);
      font-family: monospace;
    }
  }
  ul{
    list-style: none;
    text-align: center;
    li{
      border-bottom: 1px solid gray;
      padding: 10px;
      cursor: pointer;
      font-weight: bold;
      font-family: Tahoma;
      color: white;
      &:hover{
        box-shadow: 5px 0 5px 3px rgba(0,0,0,0.3);
      }
    }
  }
  `;
export const StoryContent=styled.div`
  grid-area: 'content';
  padding: 10px 70px;
  overflow-y: scroll;
  max-height: 100vh;
  background: white;
  height: 100%;
  h2{
    text-align: center;
    position: sticky;
    margin-bottom: 10px;
  }
  p{
    letter-spacing: 1px;
    text-align: justify;
  }
`;
export const Layout=styled.div`
  background: lightblue;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default StoryStore;