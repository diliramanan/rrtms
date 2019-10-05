import React from 'react';
import { IonIcon, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import { RouteComponentProps, withRouter } from 'react-router';
import './style.scss'



const routes = {
  appPages: [
    { title: 'Dashboard', path: '/', icon: 'calendar' },
    { title: 'Locate', path: '/', icon: 'map' },
    { title: 'About', path: '/', icon: 'information-circle' }
  ]
}

type Props = RouteComponentProps<{}>;

const Menu: React.FC<Props> = ({ history }) => {

  function renderlistItems(list: any[]) {
    return list
      .filter(route => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem button onClick={() => history.push(p.path)}>
            <IonIcon slot="start" name={p.icon}></IonIcon>
            <IonLabel>
              {p.title}
            </IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu contentId="main">
      <IonHeader >
        <IonToolbar >
          <IonTitle color="primary">Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
        <IonList>
          { renderlistItems(routes.appPages) }
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

export default withRouter(Menu);