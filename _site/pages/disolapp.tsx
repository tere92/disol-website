import React, {Component} from 'react'
import Head             from 'next/head';
import {DisolLayout}    from '../src/layout/DisolLayout'

import Grid             from "@material-ui/core/Grid";
import Typography       from "@material-ui/core/Typography";
import List             from "@material-ui/core/List";
import ListItem         from "@material-ui/core/ListItem";
import Collapse         from "@material-ui/core/Collapse";

import ExpandLess       from '@material-ui/icons/ExpandLess';
import ExpandMore       from '@material-ui/icons/ExpandMore';



export default class Disolapp extends Component<any, any>{

  constructor(props){
    super(props);
    this.state = {
      open0:                false,
      open1:                false,
      open2:                false,
      open3:                false,
      open4:                false,
      open5:                false,
      open6:                false,
      open7:                false,
      open8:                false,
      index:                0,
      default:              false,
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Disol App</title>
        </Head>

        <DisolLayout>
          <Grid container item md={12} >
            <div style={{width: '100%', height:'55vw', maxHeight:'95vh', backgroundImage: "url(/Portada3.png)", backgroundSize:'cover'}}/>
          </Grid>

          <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer'>
            <Typography variant='h4' style={{color: '#FF6A13', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}} id='clasesgrupales'>
              Encuentra tu tutor Disol
            </Typography>

            <Grid container direction='row' alignItems='center' justify='center' style={{padding: '3.5rem 0 0'}}>
              <Grid container item sm={1}> </Grid>
              <Grid container item md={5} alignItems='center' justify='flex-start' style={{padding: '1rem 2rem'}}>
                <Typography variant='h6' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}} id='h6Bigger'>
                  Una vez creado tu perfil en Disol app, podr??s tener ver los diferentes cursos que ofrecen nuestros tutores. Elige el tutor que m??s te agrede y revisa
                  los cursos que est?? ofreciendo actualmente.
                </Typography>
              </Grid>
              <Grid container item md={5} alignItems='center' justify='center'>
                <img src='/6.png' style={{width: '100%'}}/>
              </Grid>
              <Grid container item sm={1}> </Grid>
            </Grid>
          </Grid>

          <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer'>
            <Typography variant='h4' style={{color: '#FF6A13', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}} id='clasesgrupales'>
              Comun??cate con el tutor a trav??s del chat
            </Typography>

            <Grid container direction='row' alignItems='center' justify='center' style={{padding: '3.5rem 0 0'}}>
              <Grid container item sm={1}> </Grid>
              <Grid container item md={5} alignItems='center' justify='center'>
                <img src='/7.png' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={5} alignItems='center' justify='flex-start' style={{padding: '1rem 2rem'}}>
                <Typography variant='h6' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}} id='h6Bigger'>
                  Si deseas conocer m??s informaci??n sobre alg??n curso, puedes dar click en "Ver informaci??n" para revisar los temas, precio, y duraci??n del curso.
                  Tambi??n puedes contactar directamente al tutor dando click en "Chatear".
                </Typography>
              </Grid>
              <Grid container item sm={1}> </Grid>
            </Grid>
          </Grid>

          <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer'>
            <Typography variant='h4' style={{color: '#FF6A13', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}} id='clasesgrupales'>
              Disfruta de tus cursos de japon??s
            </Typography>

            <Grid container direction='row' alignItems='center' justify='center' style={{padding: '3.5rem 0 0'}}>
              <Grid container item sm={1}> </Grid>
              <Grid container item md={5} alignItems='center' justify='flex-start' style={{padding: '1rem 2rem'}}>
                <Typography variant='h6' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}} id='h6Bigger'>
                 Despu??s de adquirir tus cursos gratuitos o de paga, puedes descargar el material did??ctico directamente en tu celular o tablet.
                  Tambi??n puedes enviarle al tutor tus ejercicios de pr??ctica y tareas del curso para retroalimentaci??n.
                </Typography>
              </Grid>
              <Grid container item md={5} alignItems='center' justify='center'>
                <img src='/8.png' style={{width: '100%'}}/>
              </Grid>
              <Grid container item sm={1}> </Grid>
            </Grid>
          </Grid>

          <Grid container item md={12} direction='column' alignItems='center' justify='center'>
            <img src='/disol_tutors.png' style={{width: '100%'}}/>
          </Grid>

          {/*FAQ*/}
          <Grid container item md={12} direction='row' alignItems='center' justify='center' id='faq' className='basicFormat'>
            <Grid container item sm={1}> </Grid>
            <Grid container item sm={10} direction='column' justify='center' alignItems='flex-start'>
              <Typography variant='h4' style={{textAlign: 'justify', color: '#C8102E', fontSize: '2.5rem', fontWeight: 300, padding: '2rem 1rem', width: '100%'}}>
                Preguntas Frequentes
              </Typography>

              <Grid container item md={7} style={{margin: '1rem 0'}}>
                <List component="nav" style={{ width: '100%', backgroundColor: '#f7f7f7', padding: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                  <ListItem key={0} className='listItemFAQTop' tabIndex={-1} onClick={() => this.setState({open0: !this.state.open0})} onKeyDown={(e) => e.key === 'Enter' ? this.setState({open0: !this.state.open0}): this.setState({default: true})}>
                    <Typography variant= 'subtitle1' style={{width: '100%', fontWeight: 600}}>
                      <p style={{color: '#C8102E', width: '100%', fontWeight: 500, margin:0, padding:0}}>
                        ??Cu??ndo puedo chatear con los tutores?
                      </p>
                    </Typography>
                    {this.state.open0 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open0} timeout="auto" unmountOnExit>
                    <div className='listItemFAQInnerText'>
                      <ul>
                        <li>Para aclarar dudas relacionadas al contenido de sus cursos.</li>
                        <li>Para solicitar retroalimentaci??n sobre los ejercicios incluidos en sus cursos (siempre y cuando el curso incluya revisi??n por parte del tutor)</li>
                        <li>Para agendar una clase virtual por videollamada.</li>
                        <li>Para sugerir subir alg??n curso de tu inter??s.</li>
                      </ul>
                    </div>
                  </Collapse>
                </List>

                <List component="nav" style={{ width: '100%', backgroundColor: '#f7f7f7', padding: 0}}>
                  <ListItem key={1} className='listItemFAQ' tabIndex={-1} onClick={() => this.setState({open1: !this.state.open1})} onKeyDown={(e) => e.key === 'Enter' ? this.setState({open1: !this.state.open1}): this.setState({default: true})}>
                    <Typography variant= 'subtitle1' style={{width: '100%', fontWeight: 600}}>
                      <p style={{color: '#C8102E', width: '100%', fontWeight: 500, margin:0, padding:0}}>
                        ??Qu?? temas puedo tratar en el Chat con los tutores?
                      </p>
                    </Typography>
                    {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
                    <p className='listItemFAQInnerText'>
                      Disol App est?? creado para fomentar el aprendizaje del idioma japon??s con expertos nativos y/o biling??es a larga distancia y a precios accesibles, por lo que cualquier tipo de tema relacionado al aprendizaje del idioma japon??s est?? permitido.  Queda prohibido contactar a los tutores para tratar asuntos personales o no relacionados con el aprendizaje del idioma japon??s.
                    </p>
                  </Collapse>
                </List>

                <List component="nav" style={{ width: '100%', backgroundColor: '#f7f7f7', padding: 0}}>
                  <ListItem key={2} className='listItemFAQ' tabIndex={-1} onClick={() => this.setState({open2: !this.state.open2})} onKeyDown={(e) => e.key === 'Enter' ? this.setState({open2: !this.state.open2}): this.setState({default: true})}>
                    <Typography variant= 'subtitle1' style={{width: '100%', fontWeight: 600}}>
                      <p style={{color: '#C8102E', width: '100%', fontWeight: 500, margin:0, padding:0}}>
                        ??C??mo saber si los ejercicios de pr??ctica de un curso pueden ser revisados por el tutor?
                      </p>
                    </Typography>
                    {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
                    <div className='listItemFAQInnerText'>
                      Para saber si tu tutor puede revisar tus ejercicios de pr??ctica y darte retroalimentaci??n, debes dar clic al bot??n de
                      <span style={{color:'#C8102E', fontWeight:500}}> Ver Informaci??n </span> del curso y en la secci??n de
                      <span style={{color:'#C8102E', fontWeight:500}}> Temario del Curso </span> ve al apartado de Ejercicios de pr??ctica y si viene indicado
                      <span style={{color:'#C8102E', fontWeight:500}}> Revisi??n del Tutor, </span> podr??s mandar el documento con tus ejercicios resueltos al tutor por medio del
                      <span style={{color:'#C8102E', fontWeight:500}}> chat </span> del mismo curso para que te d?? retroalimentaci??n. Es importante mencionar que en la mayor??a de los casos la revisi??n s??lo se realiza una vez, aunque hay tutores que pueden aceptar revisar tus ejercicios un mayor n??mero de veces.
                    </div>
                    <img src='/temario.png' style={{width: '33%', margin: '1rem 0'}}/>
                  </Collapse>
                </List>

                <List component="nav" style={{ width: '100%', backgroundColor: '#f7f7f7', padding: 0}}>
                  <ListItem key={3} className='listItemFAQ' tabIndex={-1} onClick={() => this.setState({open3: !this.state.open3})} onKeyDown={(e) => e.key === 'Enter' ? this.setState({open3: !this.state.open3}): this.setState({default: true})}>
                    <Typography variant= 'subtitle1' style={{width: '100%', fontWeight: 600}}>
                      <p style={{color: '#C8102E', width: '100%', fontWeight: 500, margin:0, padding:0}}>
                        ??C??mo puedo agendar un clase virtual con un tutor?
                      </p>
                    </Typography>
                    {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
                    <div className='listItemFAQInnerText'>
                      Para agendar una clase virtual a trav??s de videollamada con un tutor, debes hacer lo siguiente:

                      <ol>
                        <li>Dar clic en <span style={{color:'#C8102E', fontWeight:500}}> Ver Cursos </span> del tutor de tu agrado </li>
                        <li>Buscar una clase de tipo <span style={{color:'#C8102E', fontWeight:500}}> Videollamada </span> (el tipo de clase est?? ubicado en la esquina superior derecha)</li>
                        <li>Dar clic en <span style={{color:'#C8102E', fontWeight:500}}> Chatear </span> para acordar con el tutor una fecha y hora para tu clase virtual</li>
                        <li>Una vez acordado el horario para tu clase, da clic en el bot??n de <span style={{color:'#C8102E', fontWeight:500}}> Adquirir </span> para realizar el pago.  <span style={{color:'#C8102E', fontWeight:500}}> NOTA: </span> El pago se debe realizar como m??nimo 12 horas antes de la clase.</li>
                        <li>Al realizar el pago, el tutor te enviar?? un mensaje de confirmaci??n.</li>
                        <li>El tutor se pondr?? en contacto contigo entre 5-10 minutos antes del horario acordado y te compartir?? a trav??s del Chat el link de la videollamada.</li>
                      </ol>

                    </div>
                    <img src='/videollamada.png' style={{width: '33%', margin: '1rem 0'}}/>
                  </Collapse>
                </List>

                <List component="nav" style={{ width: '100%', backgroundColor: '#f7f7f7', padding: 0}}>
                  <ListItem key={4} className='listItemFAQ' tabIndex={-1} onClick={() => this.setState({open4: !this.state.open4})} onKeyDown={(e) => e.key === 'Enter' ? this.setState({open4: !this.state.open4}): this.setState({default: true})}>
                    <Typography variant= 'subtitle1' style={{width: '100%', fontWeight: 600}}>
                      <p style={{color: '#C8102E', width: '100%', fontWeight: 500, margin:0, padding:0}}>
                        ??Puedo reagendar una clase?
                      </p>
                    </Typography>
                    {this.state.open4 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open4} timeout="auto" unmountOnExit>
                    <div className='listItemFAQInnerText'>
                      Las clases virtuales son posibles de reagendar siempre y cuando se cumplan los siguientes requisitos:
                      <ol>
                        <li>Se debe dar aviso al tutor como m??nimo 2 horas antes de la hora pactada para tu clase.</li>
                        <li>Se debe de acordar con el tutor otro horario dentro de los pr??ximos 15 d??as. La duraci??n de la clase deber?? de ser la misma.</li>
                        <li>Las clases virtuales se pueden reagendar s??lo 1 vez. Si se excede este n??mero, se tomar?? la clase como impartida y el monto pagado <span style={{color:'#C8102E', fontWeight:500}}> NO SER?? REEMBOLSADO. </span></li>
                      </ol>
                    </div>
                  </Collapse>
                </List>

                <List component="nav" style={{ width: '100%', backgroundColor: '#f7f7f7', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, padding: 0}}>
                  <ListItem key={5} style={{borderTop: '1px solid lightgray', width: '100%', backgroundColor: '#f7f7f7', textAlign: 'left', fontFamily: 'Roboto', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}} tabIndex={-1} onClick={() => this.setState({open5: !this.state.open5})} onKeyDown={(e) => e.key === 'Enter' ? this.setState({open5: !this.state.open5}): this.setState({default: true})}>
                    <Typography variant= 'subtitle1' style={{width: '100%', fontWeight: 600}}>
                      <p style={{color: '#C8102E', width: '100%', fontWeight: 500, margin:0, padding:0}}>
                        ??Se me puede reembolsar el monto por una clase virtual si no pude tomarla?
                      </p>
                    </Typography>
                    {this.state.open5 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open5} timeout="auto" unmountOnExit>
                    <p className='listItemFAQInnerText'>
                      S??, ??nicamente si cancelas la clase como m??nimo 24 horas antes de la hora acordada con el tutor y no se pudo reagendar la clase. Adem??s  de no haber reagendado dicha clase anteriormente. Para procesar el reembolso, favor de ponerte en contacto con nosotros via email.
                    </p>
                  </Collapse>
                </List>
              </Grid>

            </Grid>
            <Grid container item sm={1}> </Grid>
          </Grid>
        </DisolLayout>
      </div>
    )
  }
}