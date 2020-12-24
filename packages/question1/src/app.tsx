import React, { useState } from 'react'
import styled from 'styled-components'
import { calculate } from './math'

export const App: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<number>(1)
    const [selectValue, setSelectValue] = useState<string>('isPrime')

    const handleSelectChange = (e: any) => {
        setSelectValue(e.target.value)
        setAnswer(calculate(inputValue, e.target.value))
    }

    const handleInputChange = (e: any) => {
        let value = Math.ceil(parseFloat(e.target.value))
        if (value < 0) {
            value = 1
        }
        setInputValue(value)
        setAnswer(calculate(value, selectValue))
    }

    return (
        <Root>
            <Container>
                <FirstColumn>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </FirstColumn>
                <SecondColumn>
                    <select value={selectValue} onChange={handleSelectChange}>
                        <option value="isPrime">isPrime</option>
                        <option value="isFibonacci">isFibonacci</option>
                    </select>
                </SecondColumn>
                <ThirdColumn>
                    <span>{answer + ""}</span>
                </ThirdColumn>
            </Container>
        </Root>
    );
}

const Root = styled.div`
    overflow-y: hidden;
    @media (max-width: 600px) {
        overflow-y: scroll;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 80vh;
    width: 100%;
    min-width: 600px;
`

const Column = styled.div`
    border: 1px solid #000;
`

const FirstColumn = styled(Column)`
    flex: 0 1 200px;
`

const SecondColumn = styled(Column)`
    flex: 1 1;
`

const ThirdColumn = styled(Column)`
    flex: 0 1 300px;
`