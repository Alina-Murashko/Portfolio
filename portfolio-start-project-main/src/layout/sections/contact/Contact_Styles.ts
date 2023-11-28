import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"

const Contact = styled.section`
    textarea {
        resize: none;
        height: 160px;
    }
`
const Form = styled.form`
    margin: 0 auto;
    max-width: 400px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 56px;
`

const Label = styled.label`
    width: 100%;
    margin-bottom: 8px;

    ${font({family: "Nunito, sans-serif", weight: 600, FMax: 16, FMin: 12})};
`
const Field = styled.input`
    ${font({family: "Nunito, sans-serif"})};
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.borderInput};
    background: ${theme.colors.secondaryBg};
    padding: 10px;

    &:focus-visible {
        outline: 2px solid ${theme.colors.borderInput};
    }

   &::placeholder {
        color: transparent;
    }
`
export const S = {
    Contact,
    Form,
    Label,
    Field,
}