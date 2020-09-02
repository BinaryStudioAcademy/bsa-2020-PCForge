import React, { ReactText } from 'react';
import styles from './styles.module.scss';

interface Props {
  viewObject: {
    [fieldName: string]: ReactText;
  };
}

class RecordHardwareView extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  PcSetupComponentListItem = (field: string): JSX.Element => {
    return (
      <tr className={styles.propertyRow} key={field}>
        <td className={styles.propertyLabel}>{field}</td>
        <td className={styles.propertyValue}>{this.props.viewObject[field]}</td>
      </tr>
    );
  };

  public render(): JSX.Element {
    const neededFields = Object.keys(this.props.viewObject);
    return (
      <div className={styles.componentMetaRoot}>
        <h2 className={styles.tableHeader}>{this.props.viewObject.name}</h2>
        <table className={styles.propertiesTable}>
          <tbody>{neededFields.map(this.PcSetupComponentListItem)}</tbody>
        </table>
      </div>
    );
  }
}

export default RecordHardwareView;
