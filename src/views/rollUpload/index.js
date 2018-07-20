import React from 'react'
import css from './css.less'
import {Row, Col, Upload, Icon} from 'antd';

const Dragger = Upload.Dragger;
const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    onSelect() {

    }

    render() {
        return (
            <div className={css.rollUpload}>
                <div className={css['rollUpload-box']}>
                    <Row>
                        <Col span="24" className={css['rollUpload-Box-header']}>
                            领券名单上传
                        </Col>
                    </Row>
                    <Row className={css['rollUpload-Box-con']} gutter={5}>
                        <Col span="24" className={css['CustomerStatistics-searchBox-header']}>
                            <Dragger {...props}>
                                <p className={css['ant-upload-drag-icon']}>
                                    <Icon type="inbox"/>
                                </p>
                                <p className={css['ant-upload-text']}>Click or drag file to this area to upload</p>
                                <p className={css['ant-upload-hint']}>Support for a single or bulk upload. Strictly
                                    prohibit from uploading company data or other band files</p>
                            </Dragger>,
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default Index
