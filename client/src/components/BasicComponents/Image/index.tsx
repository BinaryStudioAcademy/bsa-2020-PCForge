import React from 'react';

interface Props {
  src: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

interface State {
  showFallback: boolean;
}

class Image extends React.PureComponent<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      showFallback: false
    }

    this.onLoadingError = this.onLoadingError.bind(this);
  }

  public defaultImage = 'https://www.streamscheme.com/wp-content/uploads/2020/04/purple-stream-room-mode-pc.jpg';

  public onLoadingError(){
    this.setState({ showFallback: true });
  }

  public render(): JSX.Element {
    return (
      <img
        src={this.state.showFallback ? this.props.fallback || this.defaultImage: this.props.src}
        alt={this.props.alt}
        className={this.props.className || ''}
        onError={this.onLoadingError}
      >
      </img>
    )
  }
}

export default Image;