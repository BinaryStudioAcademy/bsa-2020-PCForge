import React from 'react';
import RatingBox from '../RatingBox';
import Rating from '@material-ui/lab/Rating';
import RatingIcon from '../RatingBox/RatingIcon';
import styles from './styles.module.scss';
import { withStyles } from '@material-ui/styles';

interface Props {
  name: string;
  averageValue: number;
  userValue?: number;
  onValueSet?: (value: number) => void;
}

interface State {
  userValue: number;
  averageRatingHovered: boolean;
  userRatingHovered: boolean;
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
      userRatingHovered: false,
    };

    this.onUserValueMouseEnter = this.onUserValueMouseEnter.bind(this);
    this.onUserValueMouseLeave = this.onUserValueMouseLeave.bind(this);
    this.onRatingValueSet = this.onRatingValueSet.bind(this);
    this.onUserValueClick = this.onUserValueClick.bind(this);
  }

  userValueBlocked = false;

  public onRatingValueSet(value: number) {
    this.setState({
      userValue: value,
    });
    if (this.props.onValueSet) {
      this.props.onValueSet(value);
    }
  }

  public onUserValueMouseEnter() {
    this.setState({
      userRatingHovered: true,
    });
  }

  public onUserValueMouseLeave() {
    if (!this.userValueBlocked) {
      this.setState({
        userRatingHovered: false,
      });
    }
  }

  public onUserValueClick() {
    this.userValueBlocked = !this.userValueBlocked;
  }

  public render(): JSX.Element {
    const { name, averageValue } = this.props;
    const { userValue } = this.state;
    return (
      <div className={styles.ratingBoxesWrapper}>
        <div className={styles.ratingBoxWrapper} title={(averageValue || 0).toString()}>
          <StyledRating
            precision={0.1}
            value={(averageValue || 0) / 5}
            name={name + 'main-average'}
            disabled={true}
            max={1}
            icon={<RatingIcon viewBox="0 0 24 10" color={'secondary'} />}
          />
        </div>
        <div className={styles.verticalDivider} />
        <div
          className={styles.ratingBoxWrapper}
          onMouseEnter={this.onUserValueMouseEnter}
          onMouseLeave={this.onUserValueMouseLeave}
        >
          <div onClick={this.onUserValueClick} title={(userValue === 0 ? 0 : userValue || 'Not rated').toString()}>
            <StyledRating
              precision={0.1}
              disabled={true}
              name={name + 'main-user'}
              value={userValue / 5}
              max={1}
              icon={<RatingIcon viewBox="0 0 24 10" color={'primary'} />}
            />
          </div>
          {this.state.userRatingHovered && (
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
