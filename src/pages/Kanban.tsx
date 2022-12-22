import React from 'react'
import {
	KanbanComponent,
	ColumnsDirective,
	ColumnDirective,
} from '@syncfusion/ej2-react-kanban'

import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => (
	<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
		<Header category="App" title="Kanban" />
		<KanbanComponent
			id="kanban"
			keyField="Status"
			dataSource={kanbanData}
			cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
		>
			<ColumnsDirective>
				{kanbanGrid.map((ele) => (
					<ColumnDirective
						key={`KanbanColDirective_${Math.random()}`}
						headerText={ele.headerText}
						keyField={ele.keyField}
						isExpanded={ele.isExpanded}
						allowToggle={ele.allowToggle}
					/>
				))}
			</ColumnsDirective>
		</KanbanComponent>
	</div>
)

export default Kanban
