import React, { Component } from "react";
import Data from "./dataList";
import FoodList from "./FoodList";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import Link from "next/link";

class FoodCard extends Component {
  render() {
    return (
      <div>
        {Data.map((data, index) => (
          <Card raised key={index} style={{ marginBottom: 15 }}>
              <CardMedia image={data.image} title={data.sick} />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {data.sick}
                </Typography>
              </CardContent>
            <CardContent>
              <FoodList cardData={data}/>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Link
                href={{
                  pathname: "/foodDetails",
                  query: { title: data.sick, id: data.id }
                }}
              >
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

export default FoodCard;
