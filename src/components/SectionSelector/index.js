import React from 'react';
import {
  number,
  func,
  shape,
  arrayOf
} from 'prop-types';
import styled from 'styled-components';
import SectionPreviewSelection from '../SectionPreviewSelection';
import cx from 'classnames';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import {
  base,
  items,
  item
} from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

class SectionSelector extends React.Component {

  static propTypes = {
    handleOnChange: func,
    sections: arrayOf(shape(SectionPreviewSelection.propTypes)).isRequired,
    selected: number
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.state.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  handleOnChange = index => () => this.setState(state => {
    const _index = index === this.state.selected ? null : index;
    const update = { selected: _index };
    this.props.handleOnChange(update);
    return update;
  });

  render() {
    const {
      sections
    } = this.props;

    const {
      selected
    } = this.state;

    return (
      <ContainerQuery query={query}>
        {
          params => (
            <BaseStyle>
              <ItemsStyle className={cx(params)}>
                {
                  sections.map((section, index) => (
                    <ItemStyle
                      className={cx(params)}
                      key={section.id}
                    >
                      <SectionPreviewSelection
                        checked={index === selected}
                        handleOnChange={this.handleOnChange(index)}
                        {...section}
                      />
                    </ItemStyle>
                  ))
                }
              </ItemsStyle>
            </BaseStyle>
          )
        }
      </ContainerQuery>
    );
  }
}

export default SectionSelector;