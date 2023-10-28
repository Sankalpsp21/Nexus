import React from 'react';
import { FaFontAwesome } from 'react-icons/fa';
import { GameIcons } from 'react-icons/gi';
import { IconType } from 'react-icons/lib';
import { IconType } from 'react-icons/lib';
import { Md } from 'react-icons/md';

// Define the type for your props
interface TopicButtonProps {
    title: string;
    iconName: string;
}

// Define a type for the icon libraries object
type IconLibraries = {
    [key: string]: { [iconName: string]: IconType };
};

const iconLibraries: IconLibraries = {
    Fa: FaFontAwesome,
    Gi: GameIcons,
    Md: MaterialIcons,
};

const TopicButton: React.FC<TopicButtonProps> = ({ title, iconName }) => {
    const libraryKey = iconName.substring(0, 2);
    const IconComponent = iconLibraries[libraryKey][iconName] as IconType;

    if (!IconComponent) {
        // Handle the case where the icon is not found
        console.error(`Icon not found: ${iconName}`);
        return null;
    }

    return (
        <button
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                margin: '5px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                background: '#f9f9f9',
                cursor: 'pointer',
                textAlign: 'center'
            }}
            onClick={() => console.log(`Clicked on ${title}`)}
        >
            <IconComponent />
            <span>{title}</span>
        </button>
    );
};

export default TopicButton;
