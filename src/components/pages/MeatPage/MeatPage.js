import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../../js/actions/index';
import Card from '../../shared/Card/Card';

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

class ConnectedMeatPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    const {isFetching, items} = this.props.recipes;
    
    if (isFetching) {
      return <h1>loading</h1>;
    }

    return items.map(item => <Card key={item.id} name={item.name} />);
  }
};

const MeatPage = connect(mapStateToProps)(ConnectedMeatPage);

export default MeatPage;