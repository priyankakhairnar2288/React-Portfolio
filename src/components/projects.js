import React, { Component } from 'react';
import {Tabs,Tab,Grid, Cell, Card, CardTitle,CardActions, CardText , Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCateogries(){
        if (this.state.activeTab === 0 ) {
            return (
                <div className="projects-grid">
                <Card shadow={0} style={{width: '25%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project #1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>GITHUB</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#000'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={0} style={{width: '25%', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project #2</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>GITHUB</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        <Card shadow={0} style={{width: '25%', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project #3</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#000'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    </div>
            )
        } else if (this.state.activeTab === 1 ) {
            return (
                <div>
                    <h1>This is Angular</h1>
                </div>
            )
        }
        else if (this.state.activeTab === 2 ) {
            return (
                <div>
                    <h1>This is VueJs</h1>
                </div>
            )
        }else if (this.state.activeTab === 3 ) {
            return (
                <div>
                    <h1>This is MongoDb</h1>
                </div>
            )
        }else if (this.state.activeTab === 4 ) {
            return (
                <div>
                    <h1>This is NodeJS</h1>
                </div>
            )
        }
    }
    
    render(){
        return(
            <div className="category-tab">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>REACT </Tab>
                <Tab>AngularJS </Tab>
                 <Tab>VueJs </Tab>
                 <Tab>MongoDb </Tab>
                 <Tab>NodeJS </Tab>
               </Tabs>

              
               <Grid >
               <Cell col={12}>
               <div className="content">{this.toggleCateogries()} </div>
               </Cell>
               </Grid>
               
            </div>
        )
    }
}

export default Projects;