import React from 'react';
import RatingBox from '../RatingBox';
import Rating from '@material-ui/lab/Rating';
import RatingIcon from '../RatingBox/RatingIcon';
import styles from './styles.module.scss';
import { withStyles } from '@material-ui/styles';

interface Props {
  name: string;
  averageValue: number;
  ratingCount: number;
  userValue?: number;
  clickable?: boolean;
  onValueSet?: (value: number) => void;
}

interface State {
  userValue: number;
  averageRatingHovered: boolean;
  userRatingClicked: boolean;
}

const StyledRating = withStyles({
  iconFilled: {
    color: '#EB3D55',
  },
  disabled: {
    opacity: '1 !important',
    color: '#EB3D55',
  },
  iconHover: {
    color: '#EB3D55',
  },
  iconEmpty: {
    opacity: 0.5,
    color: '#EB3D55',
  },
})(Rating);

class ExtendedRatingBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userValue: this.props.userValue || 0,
      averageRatingHovered: false,
      userRatingClicked: false,
    };

    this.openRating = this.openRating.bind(this);
    this.onRatingValueSet = this.onRatingValueSet.bind(this);
  }

  public onRatingValueSet(value: number) {
    this.setState({
      userValue: value,
    });
    if (this.props.onValueSet) {
      this.props.onValueSet(value);
    }
    this.closeRating();
  }

  public openRating() {
    if (this.props.clickable && !this.state.userRatingClicked) {
      this.setState({
        userRatingClicked: true,
      });
    }
  }

  public closeRating() {
    this.setState({
      userRatingClicked: false,
    });
  }

  public render(): JSX.Element {
    const { name, averageValue, ratingCount, clickable } = this.props;
    const { userValue } = this.state;
    return (
      <div className={styles.ratingBoxesWrapper}>
        <div className={styles.ratingBoxWrapper} title={(averageValue || 0).toString()}>
          <StyledRating
            precision={0.1}
            max={1}
            name={name + 'main-average'}
            disabled={true}
            value={(averageValue || 0) / 5}
            icon={<RatingIcon viewBox="0 0 24 10" color={'secondary'} />}
          />
        </div>
        <div>
          <div>{averageValue}/5</div>
          <div>{ratingCount}</div>
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.ratingBoxWrapper} onClick={this.openRating}>
          {!this.state.userRatingClicked && (
            <div title={(userValue === 0 ? 0 : userValue || 'Not rated').toString()}>
              <StyledRating
                precision={0.1}
                disabled={true}
                name={name + 'main-user'}
                value={userValue / 5}
                max={1}
                icon={<RatingIcon viewBox="0 0 24 10" color={'primary'} />}
              />
              {!this.props.userValue && <div>Rate Me</div>}
            </div>
          )}

          {this.state.userRatingClicked && (
            <div className={styles.ratingBoxContent}>
              <RatingBox
                disabled={false}
                name={'user-' + name}
                iconColor="primary"
                ratingValue={userValue}
                onValueSet={this.onRatingValueSet}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ExtendedRatingBox;
