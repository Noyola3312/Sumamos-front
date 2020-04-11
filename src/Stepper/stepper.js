import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import { Calendar } from 'primereact/calendar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Grommet, Grid, Box, Heading, Text } from 'grommet';
import { email } from './../Models/Regex'
import './stepper.css';
const items = [
    { label: 'Datos Personales' },
    { label: 'Datos Socioeconomicos' },
    { label: 'Selecciona tu Apoyo' },
    { label: 'Documentacion' }
];
const citySelectItems = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
];
const genders = [
    { label: 'Mujer', value: 'F' },
    { label: 'Hombre', value: 'M' },
];
class Stepper extends React.Component {
    //<img src={logo} className="App-logo" alt="logo" />
    state = {
        name:{
            fNames:'',
            pName:'',
            mName:''
        },
        street:'', number:'',
        city:'', hood:'',
        gender:'', date:'',
        town:'', email:'',
        cp:'', phone:'',
        visible: false,
        validMail:false,
        step: 0,
    }
    title = "INGRESA TUS DATOS PERSONALES"
    validate = (ev) => {
        let temp = { ...ev };
        this.setState({ email: ev.target.value }, function () {
            console.log(this.state);
            if ( email.test(this.state.email) ){
                this.op.hide();
                this.setState({validMail:true});
            } else {
                this.op.show(temp)
                this.setState({validMail:false});
            }
        });
    }
    step0 = () => {
        return (
            <Grid
                rows={['70px', '70px', '70px', '70px']}
                columns={['200px', '200px', 'xsmall', '200px', '200px']}
                gap={{ column: "small", row: "medium" }}
                areas={[
                    { name: 'one', start: [0, 0], end: [0, 0] },
                    { name: 'two', start: [1, 0], end: [1, 0] },
                    { name: 'three', start: [3, 0], end: [3, 0] },
                    { name: 'four', start: [4, 0], end: [4, 0] },
                    { name: 'five', start: [0, 1], end: [1, 1] },
                    { name: 'six', start: [3, 1], end: [3, 1] },
                    { name: 'seven', start: [4, 1], end: [4, 1] },
                    { name: 'eight', start: [0, 2], end: [0, 2] },
                    { name: 'nine', start: [1, 2], end: [1, 2] },
                    { name: 'ten', start: [3, 2], end: [3, 2] },
                    { name: 'eleven', start: [4, 2], end: [4, 2] },
                    { name: 'twelve', start: [0, 3], end: [0, 3] },
                    { name: 'thirt', start: [3, 3], end: [3, 3] },
                ]}
            >
                <Box gridArea="one">
                    <Text>Apelido Paterno</Text>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Vote"
                            value={this.state.name.pName}
                            onChange={
                                (e) => this.setState({
                                     name: { ...this.state.name, pName:e.target.value } 
                                    })
                                }
                        />
                        <Button
                            icon={
                                this.state.name.pName.length > 2 ?
                                "pi pi-check" :
                                "pi pi-minus" 
                            }
                            className="p-button-secondary"
                            disabled="disabled"
                        />
                    </div>
                </Box>
                <Box gridArea="two">
                    <Text>Apelido Materno</Text>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Vote"
                            value={this.state.name.mName}
                            onChange={
                                (e) => this.setState({
                                     name: { ...this.state.name, mName:e.target.value } 
                                    })
                                }
                        />
                        <Button
                            icon={
                                this.state.name.mName.length > 2 ?
                                "pi pi-check" :
                                "pi pi-minus" 
                            }
                            className="p-button-secondary"
                            disabled="disabled"
                        />
                    </div>
                </Box>
                <Box gridArea="three" >
                    <Text>Calle</Text>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Vote"
                            value={this.state.street}
                            onChange={
                                (e) => this.setState({
                                     street: e.target.value
                                    })
                                }
                        />
                        <Button
                            icon={
                                this.state.street.length > 6 ?
                                "pi pi-check" :
                                "pi pi-minus" 
                            }
                            className="p-button-secondary"
                            disabled="disabled"
                        />
                    </div>
                </Box>
                <Box gridArea="four" >
                    <Text>Numero</Text>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Vote"
                            value={this.state.number}
                            onChange={
                                (e) => this.setState({
                                    number: e.target.value
                                    })
                                }
                        />
                        <Button
                            icon={
                                this.state.number.length > 0 ?
                                "pi pi-check" :
                                "pi pi-minus" 
                            }
                            className="p-button-secondary"
                            disabled="disabled"
                        />
                    </div>
                </Box>
                <Box gridArea="five" >
                    <Text>Nombre(s)</Text>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Vote"
                            style={{ width: '100%' }}
                            value={this.state.name.fNames}
                            onChange={
                                (e) => this.setState({
                                     name: { ...this.state.name, fNames:e.target.value } 
                                    })
                                }
                        />
                        <Button
                            icon={
                                this.state.name.fNames.length > 2 ?
                                "pi pi-check" :
                                "pi pi-minus" 
                            }
                            className="p-button-secondary"
                            disabled="disabled"
                        />
                    </div>
                </Box>
                <Box gridArea="six" >
                    <Text>Municipio</Text>
                    <Dropdown
                        value={this.state.city}
                        options={citySelectItems}
                        onChange={(e) => { this.setState({ city: e.value }) }}
                        placeholder="Selecciona Munic."
                    />
                </Box>
                <Box gridArea="seven" >
                    <Text>Colonia</Text>
                    <Dropdown
                        value={this.state.hood}
                        options={citySelectItems}
                        onChange={(e) => { this.setState({ hood: e.value }) }}
                        placeholder="Selecciona Munic."
                    />
                </Box>
                <Box gridArea="eight" >
                    <Text>Genero</Text>
                    <SelectButton
                        value={this.state.gender}
                        options={genders}
                        onChange={(e) => this.setState({ gender: e.value })}
                    ></SelectButton>
                </Box>
                <Box gridArea="nine" >
                    <Text>Fecha de Nacimiento</Text>
                    <Calendar
                        value={this.state.date}
                        onChange={(e) => this.setState({ date: e.value })}
                    ></Calendar>
                </Box>
                <Box gridArea="ten" >
                    <Text>Poblado</Text>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Vote"
                            value={this.state.town}
                            onChange={
                                (e) => this.setState({
                                    town: e.target.value
                                    })
                                }
                        />
                        <Button
                            icon={
                                this.state.town.length > 2 ?
                                "pi pi-check" :
                                "pi pi-minus" 
                            }
                            className="p-button-secondary"
                            disabled="disabled"
                        />
                    </div>
                </Box>
                <Box gridArea="eleven" >
                    <Text>C. P.</Text>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Vote"
                            keyfilter="pint"
                            value={this.state.cp}
                            onChange={
                                (e) => this.setState({
                                    cp: e.target.value
                                    })
                                }
                        />
                        <Button
                            icon={
                                this.state.cp.length > 4 ?
                                "pi pi-check" :
                                "pi pi-minus" 
                            }
                            className="p-button-secondary"
                            disabled="disabled"
                        />
                    </div>
                </Box>
                <Box gridArea="twelve" >
                    <Text>e-mail</Text>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Vote"
                            value={this.state.email}
                            onChange={(e) => this.validate(e)}
                        />
                        <Button
                            id='mailButton'
                            icon={
                                this.state.validMail ?
                                "pi pi-check" :
                                "pi pi-times" 
                            }
                            className={
                                this.state.validMail ?
                                "p-button-secondary-mail-appr" :
                                "p-button-secondary-mail"
                                
                            }
                            disabled="disabled"
                        />
                    </div>
                    <OverlayPanel
                        ref={(el) => { this.op = el; }}
                        showCloseIcon={false}
                        dismissable={false}
                    >
                        Email no valido
                    </OverlayPanel>
                </Box>
                <Box gridArea="thirt" >
                    <Text>telefono</Text>
                    <div className="p-inputgroup">
                        <InputMask
                            mask="(999)-999-9999"
                            value={this.state.phone}
                            onChange={(e) => this.setState({ phone: e.value })}
                        ></InputMask>
                        <Button
                            icon={
                                this.state.phone.length > 10 ?
                                "pi pi-check" :
                                "pi pi-minus" 
                            }
                            className="p-button-secondary"
                            disabled="disabled"
                        />
                    </div>
                </Box>
            </Grid>
        );
    }
    step1 =() =>{
        return(
            <div>Step 2</div>
        );
    }
    step2 =() =>{
        return(
            <div>Step 3</div>
        );
    }
    step3 =() =>{
        return(
            <div>Step 4</div>
        );
    }
    step4 =() =>{
        return(
            <div>Step 5</div>
        );
    }
    render() {
        return (
            <Grommet className="App" style={{ overflow: 'hidden' }}>
                <Sidebar
                    visible={this.state.visible}
                    onHide={(e) => this.setState({ visible: false })}
                >
                    Content
                </Sidebar>
                <header className="App-header">
                    <Grid
                        rows={['xxsmall', 'xsmall', 'xsmall', '700px']}
                        columns={['10%', '3%', '70%', '3%', '10%']}
                        gap="small"
                        areas={[
                            { name: 'header', start: [0, 0], end: [4, 0] },
                            { name: 'step', start: [0, 1], end: [4, 1] },
                            { name: 'title', start: [0, 2], end: [4, 2] },
                            { name: 'navb', start: [0, 3], end: [0, 3] },
                            { name: 'main', start: [2, 3], end: [2, 3] },
                            { name: 'navf', start: [4, 3], end: [4, 3] },
                        ]}
                    >
                        <Box gridArea="header"
                            alignContent="start"
                            direction="row"
                        >
                            <Button
                                icon="pi pi-align-left"
                                onClick={(e) => this.setState({ visible: true })}
                                className="mTitle topButton"
                            />
                            <Heading
                                margin={{ left: '15px' }}
                                alignSelf="start"
                                level="1"
                            >
                                Sumamos
                            </Heading>
                        </Box>
                        <Box gridArea="step" >
                            <Steps
                                model={items}
                                activeIndex={this.state.step}
                            />
                        </Box>
                        <Box gridArea="title"
                            alignContent="center">
                            <Heading
                                margin="none"
                                alignSelf="center"
                            >
                                {this.title}
                            </Heading>
                        </Box>
                        <Box gridArea="navb"
                            alignContent="center"
                        >
                            <Box direction="column" alignSelf="end" height="60%">
                                {this.state.step > 0 ?
                                <Button
                                    label="Anterior"
                                    className="navBtnB"
                                    onClick={(e) => this.setState({ step: this.state.step-1 })}
                                /> :
                                <span></span>}
                            </Box>
                        </Box>
                        <Box gridArea="main">
                            {
                                this.state.step == 0 ? 
                                <this.step0 /> :
                                    (
                                        this.state.step == 1 ?
                                        <this.step1 /> :
                                        (
                                            this.state.step == 2 ?
                                            <this.step2 /> :
                                            (
                                                this.state.step == 3 ?
                                                <this.step3 /> :
                                                <this.step4 />
                                            )
                                        )
                                    )
                            }
                        </Box>
                        <Box direction="column"
                            gridArea="navf"
                            alignContent="center"
                        >
                            <Box direction="column" alignSelf="end" height="60%">
                            {this.state.step == 3 ?
                                <span></span> :
                                <Button
                                    label="Siguiente"
                                    className="navBtnF"
                                    onClick={(e) => this.setState({ step: this.state.step+1 })}
                                />
                            }
                            </Box>
                        </Box>
                    </Grid>
                </header>
            </Grommet>
        );
    }
}

export default Stepper;
