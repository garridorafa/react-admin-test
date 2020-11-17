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
    </Card>
  )
};