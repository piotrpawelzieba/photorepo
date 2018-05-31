// @flow
import React from 'react';
import { List } from 'antd';
import Image from './Image';

type TProps = {
  images: Array<TImage>,
  onDrop: () => void,
  listview: boolean,
  onImageClick: () => void,
  onDeleteClick: () => void,
};

const { Item } = List;

class Images extends React.Component<TProps> {
  gridConfig = [
    {
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 4,
      xxl: 6,
    },
    {},
  ];

  renderItem = (
    props: $Diff<TProps, {| images: Array<TImage>, listview: boolean |}>,
  ) => ({ _id, category, url }: TImage) => (
    <Item>
      <Image key={_id} id={_id} category={category} url={url} {...props} />
    </Item>
  );
  render() {
    const { images, listview, ...props } = this.props;
    return (
      <List
        dataSource={images}
        grid={this.gridConfig[+listview]}
        renderItem={this.renderItem(props)}
      />
    );
  }
}

export default Images;
