import React from 'react';
import './RealDevices.scss';

const RealDevices = ({ article }) => (
  <article >
    <div className="article-wrapper">
		<div className="img">
			<img src={`https://d3ty40hendov17.cloudfront.net/device-pictures/${article.descriptorId}.png`} alt={article.abiType} />
		</div>
		<div className="devices-container">
			<h1>{article.name}</h1>
			<div className="devices-info">
				<span><strong>Cloud Type</strong></span>
				<div className="info">{article.cloudType}</div>
			</div>
			<div className="devices-info">
				<span><strong>Data Center</strong></span>
				<div className="info">{article.dataCenterId}</div>
			</div>
			<div className="devices-info">
				<span><strong>Form Factor</strong></span>
				<div className="info">{article.formFactor}</div>
			</div>
			<div className="devices-info">
				<span><strong>Manufacturers</strong></span>
				<div className="info">{article.manufacturers}</div>
			</div>
		</div>
    </div>
  </article>
);

export default RealDevices ;


