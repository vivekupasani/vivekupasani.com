import React from 'react'

import { CollapsibleList } from '@/components/collapsible-list'
import { ProjectItem } from '@/features/profile/components/projects/project-item'
import { PROJECTS } from '@/features/profile/data/projects'

const Projects = () => {
    return (
        <>
            <div className="screen-line-after px-4">
                <h1 className="text-3xl font-semibold">Projects</h1>
            </div>
            <CollapsibleList
                items={PROJECTS}
                max={PROJECTS.length}
                renderItem={(item) => <ProjectItem project={item} />}
            />
        </>
    )
}

export default Projects