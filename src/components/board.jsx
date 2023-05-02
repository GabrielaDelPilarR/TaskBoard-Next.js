import Card from "./card"
import List from "./list"
import {todoList, inProgressList, doneList } from './data.js'

function Board() {
    return (
        <div className="flex flex-col flex-1 gap-4 p-4">
            <div>
                <h1 className="text-2xl font-bold">
                    Development
                </h1>
            </div>
            <main className="flex flex-1 gap-6">
                <List title='TO DO'>
                    {
                        todoList.map(item=>(
                            <Card
                            {...item} key={item.id}
                            />
                        ))
                    }
                </List>
                <List title='In Progress'>
                    {
                        inProgressList.map(item=>(
                            <Card
                            {...item} key={item.id}
                            />
                        ))
                    }
                </List>
                <List title='Done'>
                    {
                        doneList.map(item=>(
                            <Card
                            {...item} key={item.id}
                            />
                        ))
                    }
                </List>
                
            </main>
        </div>
    )
}

export default Board
