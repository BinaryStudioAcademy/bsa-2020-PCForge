import React from 'react';
import styles from './styles.module.scss';

export interface KeyValue {
  [key: string]: string | number | Date;
}

interface Props {
  title: string;
  pcComponent: unknown;
  neededProperties: unknown;
}

const PcComponentView: React.FC<Props> = (props): JSX.Element => {
  const { pcComponent, neededProperties } = props as { pcComponent: KeyValue; neededProperties: KeyValue };

  const neededFields = Object.keys(neededProperties);
  const PcSetupComponentListItem = (field: string) => {
    return (
      <tr className={styles.propertyRow} key={field}>
        <td className={styles.propertyLabel}>{neededProperties[field]}</td>
        <td className={styles.propertyValue}>{pcComponent[field]}</td>
      </tr>
    );
  };
  return (
    <div className={styles.componentMetaRoot}>
      <h2 className={styles.tableHeader}>{props.title}</h2>
      <table className={styles.propertiesTable}>
        <tbody>{neededFields.map(PcSetupComponentListItem)}</tbody>
      </table>
    </div>
  );
};

export default PcComponentView;
