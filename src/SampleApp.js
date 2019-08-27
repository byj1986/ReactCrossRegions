import React from 'react';
import JsonPlaceHolderService from './JsonPlaceHolderService';
import RestApiExampleService from './RestApiExampleService';


export class SampleApp extends React.Component {
    componentDidMount() {
        JsonPlaceHolderService.getTodo().then(x => {
            console.log(x);
        }, error => {
            console.log(error);
        });

        RestApiExampleService.getEmployee().then(x => {
            console.log(x);
        }, error => {
            console.log(error);
        });
    }

    render() {
        return (
            < div >
                Simple Application for cross regions
            </div >
        );
    }
}

export default SampleApp;