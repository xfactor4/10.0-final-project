import React from 'react';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
var BS = require('react-bootstrap');



var DateRange = React.createClass({
	getInitialState: function () {
		return {
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			},
			startDate: moment().subtract(29, 'days'),
			endDate: moment()
		};
	},
	handleEvent: function (event, picker) {
		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate
		});
	},
	render: function () {
		var start = this.state.startDate.format('YYYY-MM-DD');
		var end = this.state.endDate.format('YYYY-MM-DD');
		var label = start + ' - ' + end;
		if (start === end) {
			label = start;
		}
		return (
			<BS.Grid>

				<BS.Row>
					<BS.Col md={3}>
					<h2>Select Pay Range</h2>
						<DateRangePicker startDate={this.state.startDate} endDate={this.state.endDate} ranges={this.state.ranges} onEvent={this.handleEvent}>
							<BS.Button className="selected-date-range-btn" style={{width:'100%'}}>
								<div className="pull-left"><BS.Glyphicon glyph="calendar" /></div>
								<div className="pull-right">
									<span>
										{label}
									</span>
									<span className="caret"></span>
								</div>
							</BS.Button>
						</DateRangePicker>
					</BS.Col>
					<BS.Col md={9}>


					</BS.Col>
				</BS.Row>
			</BS.Grid>
		);
	}
});

export default DateRange;
