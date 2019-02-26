import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import picture from "./dairy.jpg";

import ItemInfo from './itemInfo'
/*let DairyRow = ({ item, key }) => {
    return (
        <Col className = "itemInfo" style={{ color: "white", marginTop: "20px" }}>
		    <h3 className="description">{item.company}{' '}
			{item.type}{' '}{item.quantity}{' '}
			<span style={{fontSize: "15px"}}>${item.price}</span>
			</h3>
		<Button className="button" item = {item}/>
		</Col>
    );
};*/

export default class DairyItems extends Component {
   
    render() {
        const { dairy } = this.props;

        return (
            <div className="dairy" style={{ width: "100%", height: "1300px", backgroundImage: `url(${picture})`, padding: "0%", backgroundRepeat: "no-repeat", backgroundSize: "contain"}}>
				<Container className="product">
					<Row>
						{dairy.map((item,i) => {
							return <ItemInfo item={item} key={i} />;
						})}
					</Row>
				</Container>
			</div>
        );
    }
}