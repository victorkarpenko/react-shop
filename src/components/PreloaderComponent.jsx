import React from 'react';
import {Dimmer, Image, Loader, Segment} from "semantic-ui-react";

const Preloader = () => (
    <Segment>
        <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
);
export default Preloader;