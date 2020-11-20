import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  span: {
    color: 'red'
  }
})

export default () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title="Welcome to the Administration Panel" />
      <CardContent>Lorem ipsum sic <span class={classes.span}>dolor</span> amet...</CardContent>
      <img src="https://source.unsplash.com/random/1000x600" />
      <CardContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempore magni sed non nihil corrupti, odit ea eos quia cupiditate soluta aspernatur excepturi, quam ad eum deserunt et! Amet, delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempore magni sed non nihil corrupti, odit ea eos quia cupiditate soluta aspernatur excepturi, quam ad eum deserunt et! Amet, delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempore magni sed non nihil corrupti, oddelectus.</CardContent>
    </Card>
  )
};