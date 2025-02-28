import { useState } from "react"
import { Button, Card, Col, FormGroup, Input, Label, Row } from "reactstrap"

export default function ButtonsNumbers() {

    const [state, setState] = useState(1); // Inicia com a opção 1

    const handleOptionChange = (option) => {
        setState(option); // Muda o estado para a opção clicada
    };

    const [number, setNumber] = useState('0')
    const [prevNumbers, setPrevNumbers] = useState('')
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState(null)

    const handleClickNumber = (e) => {
        setNumber((prev) => (prev === "0" ? e.toString() : prev + e.toString()));
    };

    console.log({
        prev: prevNumbers,
        number,
        operator,
        result
    });


    const handleOperator = (op) => {
        setPrevNumbers(number);
        setOperator(op);
        setNumber('');
    };

    const calculateNumbers = () => {
        if (operator === '+') {
            setResult(parseInt(prevNumbers) + parseInt(number))
        } else if (operator === '-') {
            setResult(parseInt(prevNumbers) - parseInt(number))
        } else if (operator === '*') {
            setResult(parseInt(prevNumbers) * parseInt(number))
        } else if (operator === '/') {
            setResult(parseInt(prevNumbers) / parseInt(number))
        }
    }

    const handleClear = () => {
        setResult(null)
        setPrevNumbers('')
        setNumber('0')
        setOperator('')
    }

    return (
        <Card className="w-50 bg-primary border-0 pb-0 pt-0">
            <Row className="d-flex align-items-center">
                <Col>
                    <h4 className="fw-bolder text-start text-white">calc</h4>
                </Col>
                <Col className="d-flex align-items-center justify-content-end">
                    <Col>
                        <span
                            style={{ marginLeft: '80px' }}
                            className="fw-bolder text-white">theme</span>
                    </Col>
                    <FormGroup className="mb-4">
                        <Col className="pb-0 d-flex flex-row align-items-center">
                            <Label className="mb-0 mx-2 text-white fw-bolder">1</Label>
                            <Label className="mb-0 mx-2 text-white fw-bolder">2</Label>
                            <Label className="mb-0 mx-2 text-white fw-bolder">3</Label>
                        </Col>
                        <Col className="custom-switch text-center">
                            <Label
                                className={`switch-option ${state === 1 ? 'active' : ''}`}
                                onClick={() => handleOptionChange(1)}
                            >
                            </Label>
                            <Label
                                className={`switch-option ${state === 2 ? 'active' : ''}`}
                                onClick={() => handleOptionChange(2)}
                            >
                            </Label>
                            <Label
                                className={`switch-option ${state === 3 ? 'active' : ''}`}
                                onClick={() => handleOptionChange(3)}
                            >
                            </Label>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Input
                    style={{
                        backgroundColor: '#141c34',
                        color: 'white',
                        borderColor: '#141c34',
                        fontSize: '70px'
                    }}
                    className="p-3 text-end fw-bolder"
                    id="numbers"
                    value={result !== null && result !== undefined ? result : `${prevNumbers} ${operator} ${number}`}
                />
            </Row>
            <Row>
                <Card className="mt-3 bg-dark">
                    <Row className="mb-3">
                        <Col md={3}>
                            <Button
                            color="light"
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(7)}>
                                7
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color="light"
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(8)}>
                                8
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color="light"
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(9)}>
                                9
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color="info"
                                style={{ fontSize: '30px' }}
                                className="w-100 p-2"
                                onClick={() => handleClear()}
                            >
                                Del
                            </Button>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(4)}>
                                4
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(5)}>
                                5
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(6)}>
                                6
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                style={{ fontSize: '30px' }}
                                className="w-100 p-2"
                                onClick={() => handleOperator('+')}
                            >
                                +
                            </Button>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(1)}>
                                1
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(2)}>
                                2
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(3)}>
                                3
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                style={{ fontSize: '30px' }}
                                className="w-100 p-2"
                                onClick={() => handleOperator('-')}
                            >
                                -
                            </Button>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                            // onClick={() => handleClickNumber(1)}
                            >
                                .
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleClickNumber(0)}>
                                0
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={() => handleOperator('/')}
                            >
                                /
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button
                            color='light'
                                style={{ fontSize: '30px' }}
                                className="w-100 p-2"
                                onClick={() => handleOperator('*')}
                            >
                                x
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Button
                            color="info"
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                            // onClick={() => handleClickNumber(1)}
                            >
                                Reset
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Button
                            color="danger"
                                className="w-100 p-2"
                                style={{ fontSize: '30px' }}
                                onClick={calculateNumbers}
                            >
                                =
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Row>
            {/* <Button color="primary" onClick={() => handleClickNumber(0)}>0</Button>
            <Button onClick={() => handleClickNumber(1)}>1</Button>
            <Button onClick={() => handleClickNumber(2)}>2</Button>
            <Button onClick={() => handleClickNumber(3)}>3</Button>
            <Button onClick={() => handleClickNumber(4)}>4</Button>
            <Button onClick={() => handleClickNumber(5)}>5</Button>
            <Button onClick={() => handleClickNumber(6)}>6</Button>
           
            <Button onClick={() => handleOperator('+')}>+</Button>
            <Button onClick={() => handleOperator('-')}>-</Button>
            <Button onClick={() => handleOperator('*')}>*</Button>
            <Button onClick={() => handleOperator('/')}>/</Button>
            <Button id="resultado" onClick={calculateNumbers}>=</Button>
            <Button color="primary" onClick={() => handleClear()} > Limpar </Button> */}
        </Card>
    )
}