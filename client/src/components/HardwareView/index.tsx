import React from 'react';
import styles from './styles.module.scss';

export interface HardwareProps {
  title: string;
  hardware: Record<string, string | number>;
  schema: HardwareSchema;
}

export interface HardwareSchema {
  [propertyName: string]: {
    as?: string;
    postfix?: string;
    embedded?: HardwareSchema;
    key?: string;
  };
}

class HardwareView extends React.PureComponent<HardwareProps> {
  constructor(props: HardwareProps) {
    super(props);
  }

  PcSetupComponentListItem = (field: string): JSX.Element => {
    return (
      <tr className={styles.propertyRow} key={field}>
        <td className={styles.propertyLabel}>{this.props.schema[field].as}</td>
        <td className={styles.propertyValue}>
          {this.props.hardware[field]}
          {this.props.schema[field].postfix}
        </td>
      </tr>
    );
  };

  public render(): JSX.Element {
    const neededFields = Object.keys(this.props.schema);
    return (
      <div className={styles.componentMetaRoot}>
        <h2 className={styles.tableHeader}>{this.props.title}</h2>
        <table className={styles.propertiesTable}>
          <tbody>{neededFields.map(this.PcSetupComponentListItem)}</tbody>
        </table>
      </div>
    );
  }
}

export default HardwareView;
