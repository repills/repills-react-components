import React from 'react';
import styled from 'styled-components';
import m from 'moment';
import { getBaseUrl } from '../../utils';
import { SquareFilledPillIcon, LinkIcon } from '../Icon/icons/basic';
import {
  string,
  func,
  bool,
  arrayOf
} from 'prop-types';
import {
  base,
  mainInfo,
  source,
  title,
  type,
  date,
  detail,
  secondaryInfo,
  author,
  abstract
} from './style';

const BaseStyle = styled.article`${base}`;
const SecondaryInfoStyle = styled.div`${secondaryInfo}`;
const SourceStyle = styled.a`${source}`;
const TitleStyle = styled.h4`${title}`;
const AuthorStyle = styled.div`${author}`;
const TypeStyle = styled.div`${type}`;
const DateStyle = styled.div`${date}`;
const DetailStyle = styled.div`${detail}`;
const AbstractStyle = styled.p`${abstract}`;

class ResourcePreview extends React.Component {

  static propTypes = {
    abstract: string,
    author: string,
    color: string.isRequired,
    createdAt: string,
    dateType: string,
    generateDetailUrl: func,
    handleDetailView: func,
    hideAbstract: bool,
    hideFooter: bool,
    link: string.isRequired,
    navigateToDetail: func,
    publishedAt: string,
    reference: string,
    slug: string,
    title: string.isRequired,
    typeLabel: string.isRequired,
  };

  static defaultProps = {
    dateType: 'createdAt'
  };

  handleDetailView = e => {
    e.preventDefault();
    e.stopPropagation();
    const {
      handleDetailView,
      reference
    } = this.props;
    handleDetailView({ reference: reference });
  };

  /*
  handleNavigateToDetailPage= e => {
    e.preventDefault();
    e.stopPropagation();
    const {
      slug,
      publishedAt,
      navigateToDetail
    } = this.props;
    navigateToDetail({ slug, publishedAt });
  };
  */

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.reference !== nextProps.reference) {
      return true;
    }
    return false;
  }

  render() {

    const {
      // navigateToDetail,
      abstract,
      author,
      color,
      createdAt,
      dateType,
      generateDetailUrl,
      hideAbstract,
      hideFooter,
      link,
      publishedAt,
      slug,
      title,
      typeLabel,
      ...others
    } = this.props;

    const MainInfoStyle = styled(generateDetailUrl ? 'a' : 'div')`${mainInfo}`;

    return (
      <BaseStyle
        {...others}
      >
        <MainInfoStyle
          href={generateDetailUrl && generateDetailUrl({ slug, publishedAt })}
          onClick={this.handleDetailView}
          title={title}
        >
          <TitleStyle>
            {title}
          </TitleStyle>
          {
            abstract && !hideAbstract &&
            <AbstractStyle>{abstract}</AbstractStyle>
          }
          <DetailStyle>
            <TypeStyle color={color}>
              <SquareFilledPillIcon
                color={color}
                size={16}
              />
              <span>{typeLabel}</span>
            </TypeStyle>
            &ndash;
            {author && <AuthorStyle>by <span>{author}</span></AuthorStyle>}
          </DetailStyle>
        </MainInfoStyle>
        {
          !hideFooter &&
          <SecondaryInfoStyle>
            <SourceStyle
              href={link}
              rel="nofollow"
              target="_blank"
            >
              <LinkIcon size={16} />
              <span>{getBaseUrl(link)}</span>
            </SourceStyle>
            {
              (dateType === 'createdAt' && createdAt) &&
              <DateStyle>
                {m(createdAt).fromNow()}
              </DateStyle>
            }
            {
              (dateType === 'publishedAt' && publishedAt) &&
              <DateStyle>
                {m(publishedAt).fromNow()}
              </DateStyle>
            }
          </SecondaryInfoStyle>
        }
      </BaseStyle>
    );
  }
}

ResourcePreview.displayName = 'ResourcePreview';

export default ResourcePreview;
