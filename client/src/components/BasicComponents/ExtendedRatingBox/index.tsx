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
  ownRating?: number;
  clickable?: boolean;
  onValueSet?: (value: number) => void;
}

interface State {
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
    opacity: 0.7,
    color: '#EB3D55',
  },
})(Rating);

class ExtendedRatingBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      averageRatingHovered: false,
      userRatingClicked: false,
    };

    this.openRating = this.openRating.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.onRatingValueSet = this.onRatingValueSet.bind(this);
  }

  public onRatingValueSet(value: number) {
    if (this.props.onValueSet) {
      this.props.onValueSet(value);
    }
    this.closeRating();
  }

  public handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
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
    const ownRating = this.props.ownRating || 0;
    return (
      <div className={styles.ratingBoxesWrapper}>
        <div className={styles.ratingBoxWrapper} title={(averageValue || 0).toString()}>
          <StyledRating
            precision={0.1}
            max={1}
            name={name + 'main-average'}
            disabled={true}
            value={(averageValue || 0) / 5}
            icon={<RatingIcon viewBox="0 0 24 10" color={'secondary'} fontSize="large" />}
          />
          {!averageValue && <div className={styles.noRatingText}>Not Rated</div>}
          {!!averageValue && (
            <div className={styles.ratingNumbersHolder}>
              <div className={styles.topRatingNumber}>
                {averageValue}
                <span>/5</span>
              </div>
          <div className={styles.bottomRatingNumber}>{ratingCount} {ratingCount>1 ? 'reviews' : 'review'}</div>
            </div>
          )}
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.ratingBoxWrapper} onClick={this.openRating}>
          {!this.state.userRatingClicked && (
            <>
              <div className={styles.ratingBoxWrapper} title={(ownRating === 0 ? 'Not rated' : ownRating).toString()}>
                <StyledRating
                  precision={0.1}
                  disabled={true}
                  name={name + 'main-user'}
                  value={ownRating / 5}
                  max={1}
                  icon={<RatingIcon viewBox="0 0 24 10" color={'secondary'} fontSize="large" />}
                />
              </div>
              {!ownRating && <div className={styles.noRatingText}>Rate Me</div>}
              {!!ownRating && (
                <div className={styles.ratingNumbersHolder}>
                  <div className={styles.topRatingNumber}>{ownRating}</div>
                  <div className={styles.bottomRatingNumber}>You</div>
                </div>
              )}
            </>
          )}

          {this.state.userRatingClicked && (
            <div className={styles.ratingBoxContent} onMouseLeave={this.handleMouseLeave}>
              <RatingBox
                disabled={false}
                name={'user-' + name}
                iconColor="secondary"
                ratingValue={ownRating}
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
