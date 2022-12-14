import styled from "styled-components";

const Container = styled.div`

  padding: 40px;
  display: flex;
  justify-content: space-around;

  & > div {
    width: 100%;
    max-width: 800px;
    background: black;
    color: white;

    padding: 15px;
    border-radius: 20px;

    img {
      width: 30px;
      float: right;
      cursor: pointer;
    }

    h1,
    h2 {
      font-weight: normal;
      font-size: 70px;

      padding: 80px 0 30px 0;
      text-align: center;

      transition: 1s;
    }

    & > p {
      padding: 10px;
      border: 1px solid white;

      width: 100%;
      max-width: 140px;
      margin: 0 auto;
      font-size: 20px;

      text-align: center;
    }

    form {
      padding: 20px;

      display: flex;
      flex-direction: column;

      background: white;

      width: 100%;
      max-width: 300px;
      border-radius: 4px;

      margin: 40px auto 136px auto;

      label {
        color: var(--red);
        font-size: 12px;

        padding-top: 10px;
      }

      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: white;

        transition: 0.4s;

        width: 100%;
        max-width: 250px;
        height: 48px;
        padding: 10px 1rem;
        border-radius: 4px;
        border: 1.5px solid var(--border-input);

        margin: 10px 0;

        align-items: center;
        color: var(--color);

        &:hover {
          border-color: var(--color);
        }

        input {
          height: 100%;
          width: 100%;

          margin-left: 12.5px;

          border: none;

          &:focus::-webkit-input-placeholder {
            color: var(--transparent);
          }

          &::placeholder {
            color: var(--gray);
          }
        }
      }
    }
  }

  & > menu {
    margin-top: 50px;
    width: 100%;
    max-width: 700px;
    text-align: center;

    margin-left: 50px;

    & > h1,
    & > h2 {
      transition: 1s;
    }

    & > h1 {
      font-size: 50px;
      margin-bottom: 20px;
    }

    & > h2 {
      font-size: 25px;
    }

    main {
      height: 500px;
      margin-top: 50px;
      margin-bottom: 25px;

      padding: 10px;
      border: 1px solid var(--border-color-button);

      overflow: auto;
      ::-webkit-scrollbar {
        display: none;
      }
    }

    & > div {
      button,
      input {
        margin: 10px;
      }

      input {
        border-radius: 4px;
        border: 1px solid var(--border-color-button);
        width: 100%;
        max-width: 125px;
        padding: 0 8px;
        height: 48px;
        background: var(--dark-white-background);
      }
    }
  }

  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: unset;
    align-items: center;

    menu {
      margin-left: 0;
    }
  }

  @media (max-width: 570px) {
    menu {
      & > h1 {
        font-size: 30px;
      }

      & > h2 {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    & > div {
      h1,
      h2 {
        font-size: 40px;
      }
    }
  }

  @media (max-width: 425px) {
    & > div {
      form {
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 370px) {
    & > menu {
      & > div {
        button,
        input {
          width: 100%;
          max-width: unset;
          margin-left: 0;
          margin-right: 0;
        }

        input {
          padding: 0 25px;
        }
      }
    }
  }

  @media (max-width: 320px) {
    & > div {
      h1,
      h2 {
        font-size: 25px;
      }
    }
  }
`;

export { Container };
