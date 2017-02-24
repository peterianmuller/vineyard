import React from 'react';
import { Divider, Button, Grid } from 'semantic-ui-react';
import Note from '../components/Note';
import axios from 'axios';
import { getNotes, addEvent } from '../actions/notesView';

export default class NotesView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    //this.props.dispatch(getNotes())
    this.props.dispatch(addEvent([{title:'title1', text:'Paleo gastropub mlkshk skateboard hell of synth. IPhone neutra tattooed helvetica sustainable, artisan humblebrag taxidermy tumblr. Vaporware pitchfork meh raclette DIY. Blue bottle chambray listicle subway tile, trust fund kale chips lumbersexual. Meh mlkshk yuccie, DIY brunch chia pop-up gluten-free literally austin kitsch cred keytar +1 ennui. Tbh pug gentrify glossier salvia yuccie coloring book. Jianbing aesthetic 8-bit portland.', lat: '122', lon: '22' }, {title:'title2', text: 'Marfa skateboard tilde, kogi chartreuse la croix polaroid edison bulb street art paleo narwhal deep v mustache cardigan. Polaroid quinoa post-ironic, sartorial stumptown forage heirloom hella plaid godard succulents. IPhone hot chicken sriracha, typewriter try-hard before they sold out umami blog lumbersexual authentic readymade disrupt small batch. Umami marfa gluten-free locavore, farm-to-table offal ethical mixtape enamel pin slow-carb bushwick etsy letterpress. Chicharrones unicorn occupy viral flexitarian, kitsch pop-up ramps bicycle rights twee fixie post-ironic direct trade hot chicken brunch. Chambray VHS vexillologist marfa photo booth chicharrones man bun butcher iPhone. Pabst jean shorts ramps, cronut +1 listicle squid blue bottle tofu lomo dreamcatcher fixie scenester.', lat: '89', lon: '100' }]));
  }

  
  render() {
    return(
      <div>
        <Button onClick={ this.handleSubmit.bind(this) }> Give me Notes!</Button>
        <Button>Filter</Button>
        <Divider />
        <Grid columns="two" divided centered="true">
          <Grid.Row>
            <Grid.Column>
            {this.props.notesView.map((note, key) => (
              <Note title={note.title} text={note.text} lat={note.lat} lon={note.lon} key={key} />  
            ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>
    )
  }
}
