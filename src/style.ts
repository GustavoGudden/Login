import styled from "styled-components"
const media = {
  desktop: "@media(min-width:1024px)",
}
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  margin: auto;
  width: 80%;
  margin-top: 5rem;
  background-color: #17171f;
  border-radius: 7px;

  ${media.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 50%;
    height: 50vh;
    background-color: #17171f;
    border-radius: 7px;
    margin-top: 5rem;
    gap: 1rem;
    color: #aba3a3;
  }

  h1 {
    margin-top: 2rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    align-self: flex-start;

    ${media.desktop} {
      margin-top: 2rem;
      margin-left: 4rem;
      margin-bottom: 1rem;
      align-self: flex-start;
    }
  }

  input {
    width: 80%;
    height: 50px;
    border: none;
    background-color: #666363;

    ::placeholder {
      width: 100%;
      padding-left: 1rem;
      color: #fff;
    }
  }

  button {
    width: 80%;
    height: 30px;
    background-color: #17171f;
    border: 1px solid white;
    color: white;
    :hover {
      background-color: white;
      color: black;
    }
  }

  p {
    :hover {
      color: blue;
    }
  }
`
