import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions, RaisedButton } from 'material-ui'

export default class Welcome extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="InMotion Movie Collection"
              subtitle="by: Gerald Bailey"
            />
            <CardText>
              This movie collection application serves as a good example of how to layout your MERN stack application. It also incorporates npm packages for a grid system and a front-end componenet library built for React.
            </CardText>
            <CardActions>
              <Link to={'movies'}>
                <RaisedButton
                  label="View Movies..."
                  primary={true}
                />
              </Link>
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
