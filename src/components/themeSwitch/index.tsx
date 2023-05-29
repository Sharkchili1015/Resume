
import * as Switch from '@radix-ui/react-switch';
import './index.scss';

const ThemeSwitch = () => {
    const changeTheme = (theme: boolean) => {
        document.documentElement.dataset.theme = theme ? "dark" : "light";
    }
    return (
	<>
		<form>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
					换肤
				</label>
    
				<Switch.Root className="SwitchRoot" id="airplane-mode" onCheckedChange={changeTheme}>
					<Switch.Thumb className="SwitchThumb" />
				</Switch.Root>
			</div>
		</form>
	</>
	
    );
}

export default ThemeSwitch;