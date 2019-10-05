import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/react'
import Chart from './Chart';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>

				<IonRow >
					<IonCol size="8">
						<IonCard >
							<IonCardHeader color="primary">
								<IonCardTitle>Bin Filling Analysis</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								<Chart />
							</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>

					{/* 	<IonRow >
					<IonCol size="6">
						<IonCard >
							<IonCardHeader color="primary">
								<IonCardTitle>Bin Filling Analysis</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								<Chart />
							</IonCardContent>
						</IonCard>
					</IonCol>

					<IonCol size="6">
						<IonCard >
							<IonCardHeader color="primary">
								<IonCardTitle>Bin Filling Analysis</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								<Chart />
							</IonCardContent>
						</IonCard>
					</IonCol>

				</IonRow> */}



			</React.Fragment>
				)
			}
		}
		
		export default Home;
		
